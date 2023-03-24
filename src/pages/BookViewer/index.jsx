import { useState } from "react"
import RelayComment from '../../components/RelayComment'
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"

export default function BookViewer() {
  // const [cover, setCover] = useState(0)
  const navigate = useNavigate()

  return (
    <>
      <RelayComment id={"효리"} cnt={1} text={"프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다"}></RelayComment>
      <RelayComment id={"다은"} cnt={2} text={"신데렐라신데렐라신데렐라신데렐라"}></RelayComment>
      <RelayComment id={"안뇽"} cnt={3} text={"감삼다감삼다감삼다감삼다감삼다감삼다감삼다감삼다감삼다감삼다감삼다"}></RelayComment>
      <Button text="다음" className="next fix" onClick={() => navigate('/share/cover')}/>
    </>
  )
}