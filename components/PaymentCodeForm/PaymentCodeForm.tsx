"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PaymentCodeForm() {
  const router = useRouter();

  const [parent, setParent] = React.useState({
    parent_name: "",
    parent_email: "",
    child_id: "",
  });

  const [loading, setLoading] = React.useState(false);

  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  useEffect(() => {
    if (
      parent.parent_name.length > 0 &&
      parent.parent_email.length > 0 &&
      parent.child_id.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [parent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/paymentcode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parent),
      });
      const data = await res.json();
      if (data.success) {
        setParent({
          parent_name: "",
          parent_email: "",
          child_id: "",
        });
        setLoading(false);
      } else {
        setLoading(false);
      }
      router.push("/");
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container h-full w-full my-3 mb-10">
      {/* contact section  */}
      <section className="mt-4">
        <div className="container">
          <h3 className="text-black/90 font-medium my-4 text-2xl">
            Fill The Form To Get Payment Code
          </h3>
          <h3 className="text-black/90 font-medium my-4 text-base">
            <span className="font-bold">Note:</span> <span className=" italic">Provide the same email which was provided on the admission form when admitting the child. After submitting the form below, the payment code for your child will be sent to the provided email.</span>
          </h3>
          <div className=" flex mx-1">
            <div className="px-0">
              <div className=" ">
                <form action="" onSubmit={handleSubmit}>
                  <h1 className="text-black/80 font-medium my-4 text-xl">Payment Code Form</h1>
                  <div className="my-4">
                    <label className="text-body-color text-lg">
                      Parent{"'"}s{"/"}Guardian{"'"}s Name:{" "}
                    </label><br />
                    <input
                      type="text"
                      className="form-control rounded px-2 py-1 border border-body-color md:w-[400px] w-[300px]"
                      id="parent_name"
                      onChange={(e) =>
                        setParent({ ...parent, parent_name: e.target.value })
                      }
                    />
                  </div>

                  <div className="my-4">
                    <label className="text-body-color text-lg">
                      Parent{"'"}s{"/"}Guardian{"'"}s Email:{" "}
                    </label><br />
                    <input
                      type="email"
                      className="form-control rounded px-2 py-1 border border-body-color md:w-[400px] w-[300px]"
                      id="parent_email"
                      onChange={(e) =>
                        setParent({ ...parent, parent_email: e.target.value })
                      }
                    />
                  </div>

                  <div className="my-4">
                    <label className="text-body-color text-lg">
                      Child ID:{" "}
                    </label><br />
                    <input
                      type="text"
                      className="form-control rounded px-2 py-1 border border-body-color md:w-[200px] w-[150px]"
                      id="child_id"
                      onChange={(e) =>
                        setParent({ ...parent, child_id: e.target.value })
                      }
                    />
                  </div>

                  <div className="btn_box flex flex-col">
                    <div className="-mt-2 mb-4">
                      <p className="text-lg text-orange-500">
                        {loading
                          ? "Please wait, processing Admission Form ..... Check your email for the child's payment code."
                          : ""}
                      </p>
                    </div>
                    <button type="submit" className="rounded bg-primary hover:bg-primary/90 py-1 px-2 text-white">
                      {buttonDisabled ? "All Information Required" : "Get Code"}
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end contact section  */}
    </div>
  );
}
