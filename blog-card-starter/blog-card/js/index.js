// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
function Card(){
    return (
        <div className="w-full max-w-[360px] bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="h-[300px] w-full object-cover border rounded-lg" src="img/spacejoy-YqFz7UMm8qE-unsplash.jpg" />
            <div className="p-3">
            <div className="border-2 text-green-400 border-green-200 rounded-full px-3 py-1 w-fit mt-6">Interior</div>
            <h2 className="text-xl font-bold mt-4">Top 5 Living Room Inspirations</h2>
            <p className="text-md text-gray-500 font-semibold mt-2">
                Curated vibrants colors for your living,make it pop and calm
                in the same time</p>   
                <div className="flex justify-between items-center mt-4 group">
                <a href="#" className="text-purple-700 group-hover:text-blue-800 inline-flex items-center gap-2 cursor-pointer">Read more <span className="text-2xl">→</span></a>
               
                </div>
                </div>
        </div>
    )
    
}
ReactDOM.createRoot(document.getElementById("root")).render(<Card />);