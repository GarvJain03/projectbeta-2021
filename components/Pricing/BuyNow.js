import React from "react";

function BuyNow() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Name
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Price
                  </th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3">R2D2</td>
                  <td className="px-4 py-3 text-lg text-gray-900">Free</td>
                  <td className="w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">R2D3</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                    $24
                  </td>
                  <td className="border-t-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    R3D1
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                    $50
                  </td>
                  <td className="border-t-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    R3D2
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                    $72
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    R4D2
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                    $72
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    R4D3
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                    $72
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    R5D1
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                    $72
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    R5D2
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                    $72
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-6">
            <button className="transition duration-500 ease-in-out inline-flex text-black bg-white border-2 border-indigo-500 rounded-md py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-lg">
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BuyNow;
