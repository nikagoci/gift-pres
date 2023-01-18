import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import useAxios from '../hooks/useAxios'

const ProductDetail = () => {
  const params = useParams()
  const {data: singlePost, error, isLoading} = useAxios(`http://localhost:5000/api/v1/post/${params.id}`)

  if(isLoading) {
    return (
      <section className="py-8">
        <Spinner />
      </section>
    )
  }

  return (
    <>
    {singlePost && (
      <section className="py-8 header-height">
      <div className="container h-full mx-auto">
        <div className="flex flex-col h-full lg:items-center lg:justify-center lg:flex-row">
            
          <div className="lg:basis-1/2">
            <div className="flex justify-center px-10 mb-5">
              <img
                className="h-[400px] w-full rounded-xl"
                src={singlePost?.post.image}
                alt={singlePost?.post.product}
              />
            </div>
          </div>

          <div className="lg:mb-24">
            <div className="flex px-10 py-2 border-b border-indigo-300 divide-x lg:divide-x-0 lg:border-b-0 lg:flex-col">
              <h3 className="mt-2 text-[20px] pr-3 lg:p-0">
                Gender: {singlePost?.post.gender}
              </h3>
              <h4 className="mt-2 text-[20px] px-3 lg:p-0">
                Condintion: {singlePost?.post.condition}
              </h4>
              <h2 className="py-2 pl-3 lg:mt-2 text-[20px] lg:p-0">
                Product: {singlePost?.post.product}
              </h2>
            </div>

            <div className="flex flex-col px-10">
              <h1 className="my-5 text-3xl font-bold text-center text-indigo-600">
                Contact Information
              </h1>
              <div className="flex flex-col">
                <h3 className="text-lg leading-8">
                  Name: {singlePost?.post.firstname}
                </h3>
                <h3 className="text-lg leading-8">
                  Number: {singlePost?.post.number}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )}
    </>
    
  );
};

export default ProductDetail;
