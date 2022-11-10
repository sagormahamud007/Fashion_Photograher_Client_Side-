import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Fashion-photography`;
    }, [title])
}
export default useTitle;