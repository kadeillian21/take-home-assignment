import Image from "next/image";
import React, { useState } from "react";
import dbConnect from "../../lib/dbConnect";
import Movie from "../../models/Movie";

export function MovieShow({movie}) {
  const [message, setMessage] = useState('')

  return (
    <div className="bg-red-600">
      <h1>{movie.title}</h1>
      <Image src={movie.image} alt={""}></Image>
      <p>Movie Rating: {movie.movieRating}</p>
      <p>Tagline: {movie.tagline}</p>
      <p>Star Actor: {movie.starActor}</p>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  await dbConnect()

  const movie = await Movie.findById(params.id).lean()
  movie._id = movie._id.toString()
  movie.createdAt = ""
  movie.updatedAt = ""

  return { props: { movie } }
}

export default MovieShow
