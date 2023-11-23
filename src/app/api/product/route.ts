import { NextResponse, NextRequest } from "next/server";

let data = [
  {
    id: 1,
    title: "Product 1",
    price: 100000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f8dfa191-60b3-44c1-b730-b25e0a908c35/air-force-1-07-easyon-shoes-LKXPhZ.png",
  },
  {
    id: 2,
    title: "Product 2",
    price: 100000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f8dfa191-60b3-44c1-b730-b25e0a908c35/air-force-1-07-easyon-shoes-LKXPhZ.png",
  },
];

export async function GET(request: NextRequest) {
  console.log(request);
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    console.log(id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    } else {
      return NextResponse.json({
        status: 404,
        message: "Not Found",
      });
    }
  }

  return NextResponse.json({ status: 200, message: "Success", data });
}
