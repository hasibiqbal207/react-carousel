import { ImageSlider } from "./ImageSlider"
import car1 from "./images/car-1.jpg"
import car2 from "./images/car-2.jpg"
import car3 from "./images/car-3.jpg"
import car4 from "./images/car-4.jpg"
import car5 from "./images/car-5.jpg"

const IMAGES = [
  { url: car1, alt: "Car One" },
  { url: car2, alt: "Car Two" },
  { url: car3, alt: "Car Three" },
  { url: car4, alt: "Car Four" },
  { url: car5, alt: "Car Five" },
]

export default function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
    </div>
  )
}