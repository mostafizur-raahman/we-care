import CountUp from "react-countup";

const Count = () => {
    return (
        <div className="flex bg-white rounded-lg lg:gap-10 lg:p-5 lg:w-1/2 w-full lg:ml-[600px] lg:mt-[-100px] lg:relative">
            <div className="text-center space-y-3 font-semibold">
                <CountUp className="text-4xl font-bold  text-sky-500"  end={250} enableScrollSpy ></CountUp>
                <h1>Best Doctor</h1>
            </div>
            <div className="text-center space-y-3 font-semibold">
                <CountUp className="text-4xl font-bold  text-sky-500"  end={15} enableScrollSpy ></CountUp>
                <h1>Clinic Location</h1>
            </div>
            <div className="text-center space-y-3 font-semibold">
                <CountUp className="text-4xl font-bold  text-sky-500"  end={20}enableScrollSpy ></CountUp>
                <h1>Surgery Room</h1>
            </div>
            <div className="text-center space-y-3 font-semibold">
            <span className="text-4xl text-sky-500">+</span><CountUp className="text-4xl font-bold  text-sky-500"  end={1500} enableScrollSpy ></CountUp>
                <h1>Paitain capacity</h1>
            </div>
        </div>
    );
};

export default Count;
