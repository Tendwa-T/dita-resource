/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Landing from "@/components/Landing"
import DeviceAdvert from "@/components/DeviceAdvert"
import Tutor from "@/components/Tutor"

export default function Home() {
  const router = useRouter()
  return (
    <main>
        <Landing />
        <DeviceAdvert />
        <Tutor />
    </main>
  )
}
