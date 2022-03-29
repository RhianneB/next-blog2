import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function Contact() {
   // States for contact form fields
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    //   Form validation state
    const [errors, setErrors] = useState({});

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    // Validation check method
    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (fullname.length <= 0) {
        tempErrors["fullname"] = true;
        isValid = false;
        }
        if (email.length <= 0) {
        tempErrors["email"] = true;
        isValid = false;
        }
        if (subject.length <= 0) {
        tempErrors["subject"] = true;
        isValid = false;
        }
        if (message.length <= 0) {
        tempErrors["message"] = true;
        isValid = false;
        }

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };

    //   Handling form submit

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
        setButtonText("Sending");
        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
            email: email,
            fullname: fullname,
            subject: subject,
            message: message,
            }),
            headers: {
            "Content-Type": "application/json",
            },
            method: "POST",
        });

        const { error } = await res.json();
        if (error) {
            console.log(error);
            setShowSuccessMessage(false);
            setShowFailureMessage(true);
            setButtonText("Send");
            return;
        }
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setButtonText("Send");
        }
        console.log(fullname, email, subject, message);
    };
    return (
        <main className="font-mono">
            <Navbar/>
            <form onSubmit={handleSubmit}className="flex flex-col items-center font-bold pb-60 px-4">
            <h1 className="text-3xl font-bold">Contact Me!</h1>
                <div className="mt-8 max-w-md py-6 md:py-2 lg:py-6 px-12 rounded-2xl  bg-rose-300 drop-shadow-[25px_25px_25px_rgba(251,113,133,0.5)]">
                    <div className="grid grid-cols-1 gap-2">

                {/* Full Name */}

                    <label
                            htmlFor="fullname"
                            className=""
                        >
                            Full name:
                        </label>
                        <input
                            type="text"
                            value={fullname}
                            onChange={(e) => {
                            setFullname(e.target.value);
                            }}
                            name="fullname"
                            className="mt-1
                            block
                            w-full
                            rounded-md
                            bg-rose-200
                            border-rose-300
                            shadow-sm
                            focus:border-rose-400 focus:ring focus:ring-rose-400 focus:ring-opacity-50"
                        />
                        {errors?.fullname && (
                            <p className="text-red-500">Full Name cannot be empty.</p>
                        )}

                        {/* Email */}
                        <label
                            htmlFor="email"
                            className=""
                        >
                            E-mail:
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                            setEmail(e.target.value);
                            }}
                            className="mt-1
                            block
                            w-full
                            rounded-md
                            bg-rose-200
                            border-rose-300
                            shadow-sm
                            focus:border-rose-400 focus:ring focus:ring-rose-400 focus:ring-opacity-50"
                        />
                        {errors?.email && (
                            <p className="text-red-500">Email cannot be empty.</p>
                        )}

                        {/* Subject */}

                        <label
                            htmlFor="subject"
                            className=""
                        >
                            Subject:
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={subject}
                            onChange={(e) => {
                            setSubject(e.target.value);
                            }}
                            className="mt-1
                            block
                            w-full
                            rounded-md
                            bg-rose-200
                            border-rose-300
                            shadow-sm
                            focus:border-rose-400 focus:ring focus:ring-rose-400 focus:ring-opacity-50"
                        />
                        {errors?.subject && (
                            <p className="text-red-500">Subject cannot be empty.</p>
                        )}

                        {/* Message */}
                        <label
                            htmlFor="message"
                            className=""
                        >
                            Message:
                        </label>
                        <textarea
                            name="message"
                            value={message}
                            onChange={(e) => {
                            setMessage(e.target.value);
                            }}
                            className="mt-1
                            block
                            w-full
                            rounded-md
                            bg-rose-200
                            border-rose-300
                            shadow-sm
                            focus:border-rose-400 focus:ring focus:ring-rose-400 focus:ring-opacity-50"
                        ></textarea>
                        {errors?.message && (
                            <p className="text-red-500">Message body cannot be empty.</p>
                        )}

                        {/* Button */}
                        <button
                        type="submit"
                        className="bg-rose-600 hover:bg-black hover:text-white hover:animate-bounce font-bold py-2 rounded-full"
                        >
                        {buttonText}</button>
                    
                    {/* Delivered Message*/}
                        <div className="text-left">
                            {showSuccessMessage && (
                            <p className=" font-semibold text-sm my-2">
                                Thankyou! Your Message has been delivered.
                            </p>
                            )}
                            {showFailureMessage && (
                            <p className="text-red-500">
                                Oops! Something went wrong, please try again.
                            </p>
                            )}
                        </div>
                    </div>
                </div>
            </form>
            <Footer/>
        </main>
    );
}