export default function Background() {
    return (
        <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
            <div className="grid h-full w-full grid-cols-2 grid-rows-3">
                <div className="col-start-1 row-start-1 flex items-start justify-start p-5 md:p-7">
                    <img
                        src={"anaconda.png"}
                        alt="Anaconda Logo"
                        className="h-[130%] w-full object-cover"
                    />
                </div>

                <div className="col-start-2 row-start-2 flex items-center justify-center p-5 md:p-7">
                    <img
                        src={"python.png"}
                        alt="Python Logo"
                        className="h-[130%] w-full object-cover"
                    />
                </div>

                <div className="col-start-1 row-start-3 flex items-end justify-start p-5 md:p-7">
                    <img
                        src={"database.png"}
                        alt="Database Logo"
                        className="h-[130%] w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}