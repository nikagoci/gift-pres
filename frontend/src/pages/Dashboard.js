import React, { useState } from "react";
import Button from "../utils/Button";
import useAxios from "../hooks/useAxios";
import Spinner from "../components/Spinner";
import SingleProduct from "../components/SingleProduct";

const password = "12345";
const Dashboard = () => {
  const { data, error, isLoading } = useAxios(
    "http://localhost:5000/api/v1/post"
    );
  const [value, setValue] = useState("");
  const [fail, setFail] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClick = () => {
    if (value === password) {
      setSuccess(true);
    } else {
      setFail(true);
    }
    setValue("");
  };

  if (error) {
    return (
      <section className="py-8">
        <h1 className="text-2xl text-center text-red-700">{error.message}</h1>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="py-8">
        <Spinner />
      </section>
    );
  }

  return (
    <>
      {!success ? (
        <section className="py-8 header-height bg-[#151937]">
          <div className="container h-full mx-auto">
            <div className="flex flex-col items-center justify-center h-full gap-y-12">
              <h1 className="text-2xl font-bold text-center text-indigo-600 md:text-4xl">
                Write Passcode To Continue
              </h1>
              <div className="flex flex-col items-center gap-y-4">
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="px-8 py-4 border border-indigo-600 focus:outline-none rounded-xl"
                  placeholder="Enter Passcode"
                />
                {fail && (
                  <p className="text-xl text-rose-500">
                    Passcode Is Incorrect!
                  </p>
                )}
              </div>
              <Button onClick={handleClick} isFull>
                Submit
              </Button>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-8 bg-[#151937]">
          <div className="container h-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
              {data &&
                data.posts.map((item) => (
                  <SingleProduct data={item} key={item._id} admin />
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Dashboard;

