interface SpinnerProps {
  className?: string;
}
const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div
      className={`rounded-full border-4 border-solid border-r-green-500 animate-spin ${className}`}
      role="status"
    />
  );
};

export { Spinner };
