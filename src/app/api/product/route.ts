import { NextResponse, NextRequest } from "next/server";

let data = [
  {
    id: 1,
    name: "Product 1",
    price: 100000,
  },
  {
    id: 2,
    name: "Product 2",
    price: 100000,
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
