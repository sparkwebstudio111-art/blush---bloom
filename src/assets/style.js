export const contactPageStyles = {
  // Page layout
  pageContainer: "min-h-screen bg-red-700  py-12 sm:py-16 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12",
  innerContainer: "max-w-7xl mx-auto",
  
  // Header section
  pageHeader: "text-center mb-8 sm:mb-10 md:mb-10",
  pageTitle: "text-3xl sm:text-4xl md:text-5xl font-medium",
  pageSubtitle: "mt-2 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base",
  
  // Main grid
  mainGrid: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-8 items-start",
  
  // Left column - Form
  leftColumn: "lg:col-span-7 order-1 lg:order-1",
  formCard: "  p-6 sm:p-8 md:p-8 lg:p-8",
  form: "space-y-5",
  inputGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  
  // Input styles
  inputLabel: "text-sm text-gray-600",
  requiredStar: "text-red-500",
  inputContainer: "mt-2 relative",
  inputIconContainer: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
  inputBase: "w-full rounded-xl border border-red-900 px-4 py-3 pl-12 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition",
  inputNormal: "border-gray-200",
  inputError: "border-rose-400",
  errorMessage: "text-rose-500 text-xs mt-1 flex items-center gap-2",
  
  // Textarea
  textareaContainer: "mt-2 w-full rounded-xl border px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition",
  
  // Form buttons
  buttonsContainer: "flex flex-col justify-between sm:flex-row items-start sm:items-center gap-3 sm:gap-4",
  submitButton: "inline-flex items-center gap-3 bg-gradient-to-r from-red-700 to-red-800 text-white px-5 sm:px-6 py-3 rounded-full shadow hover:scale-[1.02] cursor-pointer transition-transform disabled:opacity-60",
  clearButton: "inline-flex bg-gray-900 text-white items-center cursor-pointer gap-2 border border-red-200 px-4 py-3 rounded-xl text-sm hover:bg-red-500 transition-colors",
  
  // Right column
  rightColumn: "lg:col-span-5 order-2 lg:order-2",
  rightColumnGrid: "grid grid-cols-1 gap-4 items-start",
  
  // Creative card
  creativeCardBase: "rounded-2xl p-4 border border-gray-100 bg-gradient-to-r shadow-lg",
  creativeCardIconContainer: "p-3 rounded-lg bg-white/90 backdrop-blur",
  creativeCardTitle: "font-semibold",
  creativeCardSubtitle: "text-sm text-gray-600 mt-2",
  creativeCardButtonBase: "inline-flex bg-gradient-to-br from-gray-300 to-gray-400 items-center gap-2 px-3 py-2 rounded-lg text-black text-sm font-medium shadow-sm",
  
  // Toast
  toastBase: "fixed left-1/2 -translate-x-1/2 bottom-8 z-50 px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg",
  toastError: "bg-rose-500 text-white",
  toastSuccess: "bg-black text-white",
  
  // Accent backgrounds for creative cards
  accentAmber: "from-gray-300 to-gray-400",
  accentIndigo: "from-indigo-50 to-cyan-50",
  
  // Button accent classes
  buttonAmber: "bg-amber-50 text-amber-700",
  buttonIndigo: "bg-indigo-600 text-white",
};