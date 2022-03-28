
export default function Card({post}){
    return(
        <div className="bg-rose-300 max-w-sm h-auto rounded-full mx-4 mb-4 hover:bg-black hover:text-white">
            <div className="py-4 px-20">
                <h3 className="text-2xl tex-bold text-center">{post.frontMatter.title}</h3>
            </div>
        </div>
    );
};