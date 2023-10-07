import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/tool`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success("Your product added successfully.");
          }
        });
    }
  };
  return (
    <div className="w-full pl-10">
      <SectionTitle title="Add Product" isAlignment="left"></SectionTitle>
      <div className="w-full flex justify-center items-center">
        <div className="w-full lg:w-3/4 mr-auto card bg-base-100 shadow-xl">
          <div className="card-body px-0 w-3/4 mx-auto">
            <div className="w-full flex">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col"
              >
                <input
                  type="textarea"
                  placeholder="Product Name"
                  className="input w-full mt-3 border border-gray-300"
                  {...register("name")}
                />

                <input
                  type="text"
                  placeholder="Product Image Link"
                  className="input w-full mt-3 border border-gray-300"
                  {...register("image")}
                />
                <input
                  type="textarea"
                  placeholder="Short Descritpion"
                  className="input w-full mt-3 border border-gray-300"
                  {...register("shortDesc")}
                />
                <input
                  type="number"
                  placeholder="Price"
                  className="input w-full mt-3 border border-gray-300"
                  {...register("price")}
                />
                <input
                  type="number"
                  placeholder="Available Quantity"
                  className="input w-full mt-3 border border-gray-300"
                  {...register("availableQuan")}
                />
                <input
                  type="number"
                  placeholder="Minimu Order Amount"
                  className="input w-full mt-3 border border-gray-300"
                  {...register("minQuan")}
                />

                <input
                  type="submit"
                  className="w-full btn btn-success text-white font-bold text-lg uppercase mt-3 py-2 rounded"
                  value="Add Product"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
