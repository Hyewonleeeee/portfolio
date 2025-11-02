"use client";

import { motion } from "framer-motion";
import { Play, Code, ExternalLink } from "lucide-react";
import { useState } from "react";
import VideoModal from "./VideoModal";
import GameThumbnail from "./GameThumbnail";
import PuzzleThumbnail from "./PuzzleThumbnail";
import GerminateThumbnail from "./GerminateThumbnail";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail?: string;
  videoUrls?: string[];
  videoTitles?: string[];
  videoDescriptions?: string[];
  videoUrl?: string;
  codeUrl?: string;
  demoUrl?: string;
  projectOverview?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "First Descendant & God of War",
    category: "Sound Design",
    description: "게임 사운드 디자인 프로젝트",
    videoUrls: [
      "https://youtu.be/VbArT0NpthY",
      "https://youtu.be/Qc3m6FdFLqQ",
    ],
    videoTitles: [
      "First Descendant",
      "God of War",
    ],
    videoDescriptions: [
      `전투 중심 트레일러의 사운드를 리디자인한 프로젝트로,

Ambience, SFX, UI를 분리 믹싱하여 영상의 리듬과 타격감을 강화했습니다.

샘플 리디자인과 사운드 레이어링 과정에서 믹싱 밸런스와 공간감을 중점으로 작업했습니다.`,
      `AI 음성 합성을 활용해 대사를 제작하고, 포먼트·피치 조정으로 캐릭터 톤을 구현했습니다.

장면별 공간감과 거리감을 표현하기 위해 3D적 사운드 믹싱과 패닝 밸런스를 중점으로 작업했습니다.

몬스터의 위치나 이동에 따라 사운드의 공간적 깊이와 주파수 밸런스가 변하도록 설계해,

전장의 긴장감과 서사적 몰입감을 극대화한 리디자인 프로젝트입니다.`,
    ],
  },
  {
    id: "2",
    title: "Puzzle Music Game",
    category: "Unity",
    description: "퍼즐 조작에 따라 실시간으로 음악이 변하는 인터랙티브 사운드 구조 구현",
    videoUrls: [
      "https://youtu.be/KgS27Kubn3w",
    ],
    videoTitles: [
      "Puzzle Music Game",
    ],
    projectOverview: `Puzzle Music Game은 Unity 기반으로 제작한 인터랙티브 오디오 퍼즐 게임입니다. 오프닝 BGM을 포함한 총 5곡의 자작곡을 기반으로, 사용자는 무작위로 선택된 이미지를 기준으로 퍼즐을 맞추게 됩니다. 각 퍼즐 조각에는 곡의 일부 오디오 클립이 포함되어 있으며, 조각을 올바른 위치에 배치할수록 음악이 점차 완성됩니다. 모든 퍼즐을 완성하면 곡 전체가 처음부터 재생되고, 폭죽 애니메이션과 함께 춤추는 돼지 캐릭터가 등장하며 완성의 순간을 축하합니다.

본 프로젝트는 시각적 퍼즐과 청각적 피드백이 결합된 음악적 몰입 경험을 목표로 설계되었습니다. 게임은 총 100개의 퍼즐 조각(5곡 × 20조각)으로 구성되어 있으며, 각 조각에는 해당 곡의 오디오 클립과 이미지 조각이 함께 포함됩니다. 정답 위치에 퍼즐을 배치하면 해당 오디오 클립의 볼륨이 점차 상승하며 전체 곡이 완성되는 구조입니다.

모든 조각이 정확히 배치되면 곡 전체가 재생되고, 폭죽, 사운드 이펙트, 춤추는 돼지 등의 시각 효과가 함께 표시됩니다. Check 버튼을 통해 틀린 조각의 테두리가 붉게 깜빡이며 즉각적인 피드백을 제공합니다. 또한 ESC 키 입력 시 종료 확인 창이 표시되어 실수로 게임을 종료하지 않도록 했고, Volume 슬라이더로 전체 사운드의 마스터 볼륨을 실시간 조정할 수 있습니다. Restart 버튼을 통해 곡과 퍼즐 조각이 랜덤으로 재배치되어 새로운 곡으로 다시 플레이할 수 있습니다.

사운드는 자작곡 5곡을 기반으로 제작되었으며, 퍼즐에 사용된 4곡은 각 곡의 하이라이트 구간(20~25초)을 중심으로 구성했습니다. 곡의 다양한 사운드 레이어가 집중된 구간을 발췌해 퍼즐 조각으로 분리함으로써, 플레이어가 퍼즐을 완성할수록 음악의 질감과 밀도가 점차 깊어지는 경험을 제공합니다.

Pig's Puzzle Music은 단순한 퍼즐 게임이 아닌, 음악을 시각적으로 완성해가는 창의적 인터랙션 실험입니다. 사용자의 행동이 곧 사운드의 변화로 이어지는 구조를 통해, 게임성과 음악성이 공존하는 인터랙티브 사운드 디자인을 구현했습니다.`,
  },
  {
    id: "3",
    title: "Germinate Delay",
    category: "JUCE Plugin",
    description: "그래뉼러와 아날로그 필터를 결합한 크리에이티브 딜레이 플러그인",
    videoUrls: [
      "https://youtu.be/YahmxA6xYJo",
    ],
    videoTitles: [
      "Germinate Delay",
    ],
    projectOverview: `Germinate Delay는 그래뉼러 알고리즘과 아날로그 필터를 결합한 크리에이티브 딜레이 플러그인입니다.

RNBO 프로토타입을 기반으로 JUCE에서 DSP와 UI를 직접 구현했습니다.

각 파라미터는 서로 연동되어 작동하며, Sprout Time(Delay), Loopback(Feedback), Water(Mix), Breeze(Modulation), Sunlight(Tone)으로 구성됩니다.

Soft Mode – 코러스처럼 부드럽게 요동치는 모듈레이션과 스테레오 확장감을 제공합니다. 깨끗하고 자연스러운 앰비언스, 투명한 잔향 연출에 적합합니다.

Hard Mode – 다중 속도의 LFO, 공명 필터, 스테레오 스프레드, 그리고 유기적인 모듈레이션을 통해 복잡하고 진화하는 에코를 구현합니다.

Direction Control

FWD (Forward) : 시간의 흐름을 따라 자연스럽게 퍼져나가는 전통적인 딜레이

REV (Reverse) : 되감기듯 접히는 리버스 딜레이로, 꿈결 같은 스웰과 테이프 리버스 질감을 만듭니다.

Germinate Delay는 단순히 반복을 만드는 플러그인이 아니라, 사운드가 유기적으로 '자라나는' 과정을 담은 오디오 플러그인입니다.`,
  },
];

export default function Works() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleVideoClick = (project: Project) => {
    if (project.videoUrls && project.videoUrls.length > 0) {
      setSelectedProject(project);
      setModalOpen(true);
    } else if (project.videoUrl) {
      window.open(project.videoUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <section id="works" className="py-32 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-accent-teal transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                {/* Thumbnail */}
                <div className="aspect-video relative overflow-hidden">
                  {project.id === "1" && project.category === "Sound Design" ? (
                    <GameThumbnail title={project.title} />
                  ) : project.id === "2" && project.category === "Unity" ? (
                    <PuzzleThumbnail title={project.title} />
                  ) : project.id === "3" && project.category === "JUCE Plugin" ? (
                    <GerminateThumbnail title={project.title} />
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-4xl opacity-20">🎵</div>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-accent-teal opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-accent-yellow">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-3 flex-wrap">
                    {(project.videoUrls || project.videoUrl) && (
                      <button
                        onClick={() => handleVideoClick(project)}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent-teal transition-colors"
                      >
                        <Play className="w-4 h-4" />
                        <span>{project.id === "3" || project.category === "JUCE Plugin" ? "데모 보기" : "영상 보기"}</span>
                      </button>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent-teal transition-colors"
                      >
                        <Code className="w-4 h-4" />
                        <span>코드 보기</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Video Modal */}
      {selectedProject && (
        <VideoModal
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setSelectedProject(null);
          }}
          videos={selectedProject.videoUrls || []}
          videoTitles={selectedProject.videoTitles}
          videoDescriptions={selectedProject.videoDescriptions}
          title={selectedProject.title}
          projectOverview={selectedProject.projectOverview}
        />
      )}
    </>
  );
}

