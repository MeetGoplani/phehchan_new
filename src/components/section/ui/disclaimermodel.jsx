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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className={cn(
          "relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-lg shadow-lg",
          "flex flex-col max-h-[90vh]", // Added max height constraint
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
        <div className="p-6 md:p-8 space-y-4 overflow-y-auto">
          <h2
            id="disclaimer-title"
            className="text-xl font-semibold text-gray-900 dark:text-white text-center underline"
          >
            Disclaimer
          </h2>

          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p className="font-bold">
              Under the rules of the Bar Council of India, Phehchan Brand
              Solutions (the "Firm") is prohibited from soliciting work or
              advertising. By clicking, "I Agree" below, the user acknowledges
              that:
            </p>

            <ul className="space-y-2 list-disc pl-5">
              <li>
                There has been no advertisement, personal communication,
                solicitation, invitation or inducement of any sort whatsoever from
                the Firm or any of its members to solicit any work or advertise
                through this website
              </li>
              <li>
                The purpose of this website is to provide the user with
                information about the Firm, its practice areas, its advocates and
                solicitors
              </li>
              <li>
                The user wishes to gain more information about the Firm for
                his/her own information and personal/ professional use
              </li>
              <li>
                The information about the Firm is provided to
                the user only on his/ her specific request and any information
                obtained or materials downloaded from this website are completely
                at the user's volition and any transmission, receipt or use of
                this website would not create any lawyer-client relationship
              </li>
              <li>
                This website is not intended to be a source of
                advertising or solicitation and the contents hereof should not be
                construed as legal advice in any manner whatsoever
              </li>
              <li>
                The Firm is not liable for any consequence of
                any action taken by the user relying on material/ information
                provided under this website. In cases where the user requires any
                assistance, he/she must seek independent legal advice
              </li>
              <li>
                The content of this website is Intellectual
                Property of the Firm
              </li>
            </ul>

            <p>
              By continuing to use this website, you acknowledge that you have
              read and understood this disclaimer.
            </p>
          </div>
        </div>

        <div className="p-6 pt-0 flex justify-center border-t">
          <button
            onClick={closeModal}
            className={cn(
              "px-5 mt-5 py-2.5 rounded-md font-medium text-sm",
              "bg-primary text-primary-foreground hover:bg-primary/90",
              "transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            )}
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
