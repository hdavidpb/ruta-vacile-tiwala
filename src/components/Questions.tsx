interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Questions = ({ children }: Props) => {
  return <div className="form-question-container">{children}</div>;
};

export default Questions;
