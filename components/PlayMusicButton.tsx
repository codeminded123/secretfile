'use client'
import React, { useRef, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'

const PlayMusicButton = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null) // Persistent audio instance
  const [isPlaying, setIsPlaying] = useState(false)

  // Initialize the audio instance once
  if (typeof window !== 'undefined' && !audioRef.current) {
    audioRef.current = new Audio('/music/song.mp3')
  }

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <button
      onClick={togglePlay}
      className='font-bold p-4 flex flex-col items-center space-x-2 fixed top-0 z-50'
    >
      {isPlaying ? (
        <div className='bg-white p-2 rounded-full'>
          <FaPause size={18} className='text-black' />
        </div>
      ) : (
        <div className='bg-white p-2 rounded-full'>
          <FaPlay size={18} className='text-black' />
        </div>
      )}
      <span className='text-xs text-yellow-700 pt-2'>
        Click to
        <br />
        play music
      </span>
    </button>
  )
}

export default PlayMusicButton
