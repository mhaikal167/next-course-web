type CardProps = {
  children: React.ReactNode;
};
export default function Card({ children }: CardProps) {
  return (
    <div className="p-24 bg-white shadow-md flex justify-center items-center border border-[#ddd] rounded-md">
      {children}
    </div>
  );
}
