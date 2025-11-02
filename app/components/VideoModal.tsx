"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videos: string[];
  videoTitles?: string[];
  videoDescriptions?: string[];
  title: string;
  projectOverview?: string;
}

export default function VideoModal({ isOpen, onClose, videos, videoTitles, videoDescriptions, title, projectOverview }: VideoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // 로컬 비디오 파일인지 확인하는 함수
  const isLocalVideo = (url: string) => {
    return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg') || url.startsWith('/videos/');
  };

  // YouTube/Vimeo URL을 embed URL로 변환하는 함수
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("vimeo.com")) {
      const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return url;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gray-900 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-gray-800">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800 sticky top-0 bg-gray-900">
                <h3 className="text-2xl font-bold">{title}</h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Videos */}
              <div className="p-6">
                {videos.map((video, index) => {
                  const videoTitle = videoTitles?.[index] || `Video ${index + 1}`;
                  const videoDescription = videoDescriptions?.[index];
                  return (
                    <motion.div
                      key={index}
                      className="relative w-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Video Title */}
                      <h4 className="text-lg md:text-xl font-semibold mb-4 text-accent-teal">
                        {videoTitle}
                      </h4>
                      
                      <div className="aspect-video bg-black rounded-lg overflow-hidden mb-10">
                        {isLocalVideo(video) ? (
                          <video
                            controls
                            className="w-full h-full"
                            src={video}
                            preload="metadata"
                          >
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <iframe
                            src={getEmbedUrl(video)}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={`${title} - ${videoTitle}`}
                          />
                        )}
                      </div>

                      {/* Video Description */}
                      {videoDescription && (
                        <div className="mb-8">
                          <h5 className="text-base md:text-lg font-semibold mb-3 text-gray-400">
                            Description
                          </h5>
                          <p className="text-gray-300 leading-relaxed text-sm md:text-base whitespace-pre-line">
                            {videoDescription}
                          </p>
                        </div>
                      )}

                      {/* Separator between videos */}
                      {index < videos.length - 1 && (
                        <div className="border-t border-gray-800 pt-8" />
                      )}
                    </motion.div>
                  );
                })}

                {/* Project Overview */}
                {projectOverview && (
                  <motion.div
                    className="mt-8 pt-8 border-t border-gray-800 px-6 pb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: videos.length * 0.1 }}
                  >
                    <h4 className="text-xl md:text-2xl font-bold mb-6 text-accent-teal">
                      Project Overview
                    </h4>
                    <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed space-y-4">
                      {projectOverview.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-base md:text-lg leading-7">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

