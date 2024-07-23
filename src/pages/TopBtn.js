export default function TopBtn() {
  return (
    <button
      x-data="topBtn"
      id="topButton"
      class="fixed bottom-10 right-10 z-10 animate-bounce rounded-full bg-gray-100 w-16 h-16 hidden justify-center items-center shadow-md"
    >
      <i class="fas fa-arrow-up text-3xl"></i>
    </button>
  );
}
