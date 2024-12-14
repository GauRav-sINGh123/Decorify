import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { imageUrl, roomType, selectedStyle, requirements } = await req.json();
 
    if ([imageUrl, roomType, selectedStyle].some((item) => item == null)) {
      return NextResponse.json(
        { message: "Please fill all the fields" },
        { status: 400 }
      );
    }

    
    console.log("Received Data:", {
      imageUrl,
      roomType,
      selectedStyle,
      requirements: requirements || "No additional requirements provided",
    });

    
    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { message: "An error occurred while processing the request." },
      { status: 500 }
    );
  }
}
