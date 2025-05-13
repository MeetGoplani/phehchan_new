"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenDisclaimer = sessionStorage.getItem("hasSeenDisclaimer");
    if (!hasSeenDisclaimer) {
      setIsOpen(true);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenDisclaimer", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className={cn(
          "relative w-full max-w-md bg-white dark:bg-slate-900 rounded-lg shadow-lg",
          "p-6 md:p-8 animate-in zoom-in-95 duration-200",
          "dark:border dark:border-slate-800"
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-title"
      >
        {/* Close button */}
        {/* <button
          onClick={closeModal}
          className={cn(
            "absolute top-4 right-4 p-1 rounded-full",
            "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100",
            "hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          )}
          aria-label="Close"
        >
          <X size={18} />
        </button> */}

        {/* Content */}
        <div className="space-y-4">
          <h2
            id="disclaimer-title"
            className="text-xl font-semibold text-gray-900 dark:text-white text-center underline"
          >
            Disclaimer
          </h2>

          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p className="font-bold">
              Welcome to our website. Before you proceed, please read and
              understand the following disclaimer:
            </p>

            <p>
              The information presented on this website is not legal advice. We
              encourage you to perform further research on the topics described
              here, and if you have any questions or would like to speak to one
              of our immigration lawyers, please do not hesitate to contact us.
              Submitting any forms on this website does not automatically
              establish a client-lawyer relationship
            </p>

            <p>
              By continuing to use this website, you acknowledge that you have
              read and understood this disclaimer.
            </p>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              onClick={closeModal}
              className={cn(
                "px-5 py-2.5 rounded-md font-medium text-sm",
                "bg-primary text-primary-foreground hover:bg-primary/90",
                "transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              )}
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
