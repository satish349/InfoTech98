"use client";
import CourseForm from "@/components/form/courseForm";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';


export default function CourseFormModal() {

  const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);
  return (
    <>
      <div className="flex m-auto text-white">
        {
            !isOpen && (
                <button onClick={()=>setIsOpen(true)} className="bg-blue-800 py-2 px-9 font-semibold rounded-md cursor-pointer hover:bg-blue-600 hover:duration-700">
                    Add New Courses
                </button>
            )
        }
        <AnimatePresence>
            <div className="bg-gray-700 rounded-md flex m-auto">
                {
                isOpen && (
                    <motion.div
                        onClick={closeModal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                    <>
                        <div>
                            <IoMdCloseCircle onClick={closeModal} className="ml-107 mt-5 -mb-10 text-2xl cursor-pointer"/>
                            <CourseForm />
                        </div>
                        
                    </>
                    </motion.div>
                </motion.div>
                )
                }
            </div>
        </AnimatePresence>
      </div>
    </>
  );
}
