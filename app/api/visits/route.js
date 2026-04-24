export async function GET() {
    try {
        const vercel_base_count = 95
        const res = await fetch(
            "https://api.counterapi.dev/v2/swayam/portfolio-visitor-count/up",
            {
                headers: {
                    Authorization: `Bearer ${process.env.COUNTER_API_KEY}`,
                },
                cache: "no-store",
            }
        );

        const data = await res.json();

        console.log("COUNTER API RESPONSE:", data);

        return Response.json({
            count: (data?.data?.up_count) + vercel_base_count || 0,
        });
    } catch (err) {
        return Response.json({ count: 0 });
    }
}