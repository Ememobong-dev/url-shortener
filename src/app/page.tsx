"use client";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(url, "Url value here");
    try {
      const response = await fetch("https://cleanuri.com/api/v1/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Indicate JSON payload
        },
        body: JSON.stringify({ url }),
      });

      console.log(response);
    } catch (err) {
      setError("Error happened");
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center w-1/2 mx-auto ">
        <div className="py-10 px-8 w-full bg-darkViolet flex flex-col justify-center rounded-lg ">
          <form onSubmit={handleSubmit} style={{ display: "inline-block" }}>
            <div className="flex justify-center gap-5 items-center w-full">
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="py-3 px-5 w-3/4 border-none outline-none bg-white  placeholder:font-bold "
                placeholder="Shorten your link here..."
              />
              <button
                type="submit"
                className="py-3 px-3 w-[20%] rounded-lg bg-cyan text-white font-bold"
              >
                Shorten it!
              </button>
            </div>
            {error && (
              <p className="mt-2" style={{ color: "red" }}>
                {error}
              </p>
            )}
          </form>
        </div>
        {shortenedUrl && (
          <div style={{ marginTop: "20px" }}>
            <p>
              Shortened URL: <a href={shortenedUrl}>{shortenedUrl}</a>
            </p>
          </div>
        )}
      </div>
    </>
  );
}
