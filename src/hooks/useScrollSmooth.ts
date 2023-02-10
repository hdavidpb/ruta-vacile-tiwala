interface Props {
  formRef: React.RefObject<HTMLDivElement>;
  index: number;
}
const useScrollSmooth = ({ formRef, index }: Props) => {
  const smoothScrollBottom = async () => {
    if (formRef.current) {
      formRef.current.classList.remove("disabled-scroll");

      setTimeout(() => {
        formRef.current!.scroll({
          behavior: "smooth",
          top: window.innerHeight * (index! + 1),
        });
      }, 400);

      setTimeout(() => {
        formRef.current!.classList.add("disabled-scroll");
      }, 500);
    }
  };

  const smoothScrollTop = () => {
    if (formRef.current) {
      formRef.current.classList.remove("disabled-scroll");

      setTimeout(() => {
        formRef.current!.scroll({
          behavior: "smooth",
          top: window.innerHeight * (index! - 1),
        });
      }, 400);

      setTimeout(() => {
        formRef.current!.classList.add("disabled-scroll");
      }, 500);
    }
  };

  return { smoothScrollTop, smoothScrollBottom };
};

export default useScrollSmooth;
