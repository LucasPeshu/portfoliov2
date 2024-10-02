import Container from "./Container"


function Header() {
  return(
    <div className="bg-neutral-900 py-2">
      <Container>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <img src="https://res.cloudinary.com/diadzh30o/image/upload/v1727665984/Portfolio/omun3t6pjtjprhbsfnho.jpg" alt="" className="rounded-full h-12"/>
            <div>
              <div className="text-white">Lucas Pereira Da Silva</div>
              <div className="text-gray-400">Portafolio web.</div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Header;