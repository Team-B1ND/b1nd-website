import { Member } from "./member.constants";
import { GithubLogo, Linkedin, Blog, IoIosRocket, UserCircle } from "../../assets";

export const MEMBERS_BY_GENERATION: Record<string, Member[]> = {
    "8": [
      {
        name: "김가영",
        role: "Back-end Developer",
        leader: true, 
        links: [
          { label: "Github", url: "https://github.com/GayeongKimm", icon: GithubLogo },
        ]
      },
      {
        name: "김동찬",
        role: "Back-end Developer",
        links: [{ label: "Github", url: "https://github.com/dongchandev", icon: GithubLogo }]
      },
      {
        name: "박병준",
        role: "Android Developer",
        links: [
          { label: "Github", url: "https://github.com/8954sood", icon: GithubLogo },
          { label: "Blog", url: "https://velog.io/@8954sood", icon: Blog }
        ]
      },
      {
        name: "박시현",
        role: "Front-end Developer",
        links: [
          { label: "Github", url: "https://github.com/developersihyeon", icon: GithubLogo },
          { label: "Blog", url: "https://velog.io/@s1_hyun/posts", icon: Blog }
        ]
      },
      {
        name: "이강연",
        role: "iOS Developer",
        links: [
          { label: "Github", url: "https://github.com/bestswlkh0310", icon: GithubLogo },
          { label: "Blog", url: "http://hhhello.tistory.com/", icon: Blog }
        ]
      },
      {
        name: "이윤채",
        role: "iOS Developer",
        links: [{ label: "Github", url: "https://github.com/leeyoonchae", icon: GithubLogo }]
      },
      {
        name: "이해준",
        role: "Front-end Developer",
        links: [
          { label: "Github", url: "https://github.com/ftery0", icon: GithubLogo },
          { label: "Blog", url: "https://velog.io/@ftery0/posts", icon: Blog },
          { label: "RocketPunch", url: "https://www.rocketpunch.com/@HaeJun", icon: IoIosRocket },
          { label: "LinkedIn", url: "https://www.linkedin.com/in/erb-l-465001314/", icon: Linkedin }
        ]
      },
      {
        name: "조영우",
        role: "iOS Developer",
        links: [{ label: "Github", url: "https://github.com/jyw28", icon: GithubLogo }]
      },
      {
        name: "전민찬",
        role: "Front-end Developer",
        links: [
          { label: "Github", url: "https://github.com/wjzlskxk", icon: GithubLogo },
          { label: "Blog", url: "https://velog.io/@wjzlskxk/posts", icon: Blog }
        ]
      },
      {
        name: "한준혁",
        role: "Android Developer",
        links: [{ label: "Github", url: "https://github.com/wnsgur1", icon: GithubLogo }]
      }
    ],
    "7": [
      {
        name: "전해림",
        role: "Front-end Developer",
        leader: true,
        links: [
          { label: "Github", url: "https://github.com/HAERIM0", icon: GithubLogo },
          { label: "Blog", url: "https://m.blog.naver.com/sun_rim", icon: Blog }
        ]
      },
      {
        name: "도현욱",
        role: "Android Developer",
        links: [
          { label: "Github", url: "https://github.com/wsi1212", icon: GithubLogo },
          { label: "Blog", url: "https://velog.io/@wsi1212", icon: Blog }
        ]
      },
      {
        name: "박상현",
        role: "Front-end Developer",
        links: [
          { label: "Github", url: "https://github.com/Sanghyun0505", icon: GithubLogo },
          { label: "Blog", url: "https://velog.io/@doldory55", icon: Blog }
        ]
      },
      {
        name: "백승하",
        role: "Front-end Developer",
        links: [
          { label: "Github", url: "https://github.com/baekseungha", icon: GithubLogo },
          { label: "Blog", url: "https://100log.vercel.app/", icon: Blog }
        ]
      },
      {
        name: "윤석규",
        role: "Android Developer",
        links: [
          { label: "Github", url: "https://github.com/SeokgyuYun", icon: GithubLogo },
          { label: "Blog", url: "https://velog.io/@yun_seokgyu", icon: Blog }
        ]
      },
      {
        name: "이민규",
        role: "iOS Developer",
        links: [
          { label: "Github", url: "https://github.com/Mingyuuu0108", icon: GithubLogo },
          { label: "Profile", url: "https://min-gyu.notion.site/iOS-9d31caa6a9bc433e884ba7b8df6135ab", icon: UserCircle }
        ]
      },
      {
        name: "이석호",
        role: "iOS Developer",
        links: [
          { label: "Github", url: "https://github.com/Mercen-Lee", icon: GithubLogo },
          { label: "Blog", url: "https://mercenary.tistory.com/", icon: Blog },
          { label: "RocketPunch", url: "https://www.rocketpunch.com/@mercen", icon: IoIosRocket },
          { label: "Portfolio", url: "https://portfolio.mercen.net/", icon: UserCircle },
          { label: "LinkedIn", url: "https://www.linkedin.com/in/mercen-lee-08965a242/", icon: Linkedin }
        ]
      },
      {
        name: "이지민",
        role: "Back-end Developer",
        links: [
          { label: "Github", url: "https://github.com/leeggmin", icon: GithubLogo },
          { label: "Blog", url: "https://leeggmin.tistory.com", icon: Blog }
        ]
      },
      {
        name: "최수원",
        role: "Back-end Developer",
        links: [{ label: "Github", url: "https://github.com/suw0n", icon: GithubLogo }]
      }
    ],
    "6": [
    {
      name: "기준",
      role: "Front-end Developer",
      links: [
        { label: "Github", url: "https://github.com/june3011", icon: GithubLogo },
        { label: "Blog", url: "https://velog.io/@june0623", icon: Blog }
      ]
    },
    {
      name: "금현호",
      role: "Front-end Developer",
      links: [
        { label: "Github", url: "https://github.com/nrbns357", icon: GithubLogo },
        { label: "Blog", url: "https://nrbns.tistory.com/", icon: Blog }
      ]
    },
    {
      name: "김도현",
      role: "Android Developer",
      links: [
        { label: "Github", url: "https://github.com/kdh1123", icon: GithubLogo },
        { label: "Blog", url: "https://cwwhyeon.tistory.com/", icon: Blog }
      ]
    },
    {
      name: "김상은",
      role: "iOS Developer",
      leader: true,
      links: [
        { label: "Github", url: "https://github.com/SangAu124", icon: GithubLogo },
        { label: "Blog", url: "https://velog.io/@sangau124", icon: Blog }
      ]
    },
    {
      name: "김준호",
      role: "Back-end Developer",
      links: [
        { label: "Github", url: "https://github.com/rlawnsgh714", icon: GithubLogo },
        { label: "Blog", url: "https://rumarul-coding.tistory.com/", icon: Blog },
        { label: "RocketPunch", url: "https://www.rocketpunch.com/@junho07140714", icon: IoIosRocket }
      ]
    },
    {
      name: "우준성",
      role: "Back-end Developer",
      links: [
        { label: "Github", url: "https://github.com/whitebear05", icon: GithubLogo },
        { label: "Blog", url: "https://white-world.tistory.com/", icon: Blog },
        { label: "RocketPunch", url: "https://www.rocketpunch.com/@woojs0505", icon: IoIosRocket }
      ]
    },
    {
      name: "임동현",
      role: "Front-end Developer",
      links: [
        { label: "Github", url: "https://github.com/ldh3907", icon: GithubLogo },
        { label: "Blog", url: "https://velog.io/@ldh3907", icon: Blog }
      ]
    },
    {
      name: "최민재",
      role: "Android Developer",
      links: [
        { label: "Github", url: "https://github.com/snack655", icon: GithubLogo },
        { label: "Blog", url: "https://ssnack655.tistory.com/", icon: Blog },
        { label: "RocketPunch", url: "https://www.rocketpunch.com/@cmjcmj1230", icon: IoIosRocket }
      ]
    }
  ],
  "5": [
    {
      name: "류한규",
      role: "Android Developer",
      leader: true,
      links: [
        { label: "Github", url: "https://github.com/zxcmnb05", icon: GithubLogo },
        { label: "Blog", url: "https://velog.io/@zxcmnb05", icon: Blog },
        { label: "RocketPunch", url: "https://www.rocketpunch.com/@ryuhangyu", icon: IoIosRocket }
      ]
    },
    {
      name: "박상아",
      role: "Front-end Developer",
      links: [
        { label: "Github", url: "https://github.com/ivory0312", icon: GithubLogo },
        { label: "Blog", url: "https://ivory0312.tistory.com/", icon: Blog },
        { label: "RocketPunch", url: "https://www.rocketpunch.com/@sangah0312", icon: IoIosRocket }
      ]
    },
    {
      name: "박세은",
      role: "iOS Developer",
      links: [
        { label: "Github", url: "https://github.com/prs176", icon: GithubLogo },
        { label: "Blog", url: "", icon: Blog }
      ]
    },
    {
      name: "박지나",
      role: "Back-end Developer",
      links: [
        { label: "Github", url: "https://github.com/pjn141414", icon: GithubLogo },
        { label: "Blog", url: "https://1o7o1q.tistory.com/", icon: Blog },
        { label: "RocketPunch", url: "https://www.rocketpunch.com/@jina071049", icon: IoIosRocket }
      ]
    },
    {
      name: "사승은",
      role: "Android Developer",
      links: [
        { label: "Github", url: "https://github.com/Silver-Deer", icon: GithubLogo },
        { label: "Blog", url: "", icon: Blog }
      ]
    },
    {
      name: "손민재",
      role: "Front-end Developer",
      links: [
        { label: "Github", url: "https://github.com/Clzzi", icon: GithubLogo },
        { label: "Blog", url: "https://velog.io/@jce1407", icon: Blog },
        { label: "RocketPunch", url: "https://www.rocketpunch.com/@clzzi1109", icon: IoIosRocket }
      ]
    },
    {
      name: "신중빈",
      role: "Back-end Developer",
      links: [
        { label: "Github", url: "https://github.com/krung2", icon: GithubLogo },
        { label: "Blog", url: "https://velog.io/@krung2", icon: Blog },
        { label: "RocketPunch", url: "https://www.rocketpunch.com/@888129f6", icon: IoIosRocket }
      ]
    },
    {
      name: "이동주",
      role: "Window Developer",
      links: [
        { label: "Github", url: "https://github.com/dannyldj", icon: GithubLogo },
        { label: "Blog", url: "", icon: Blog }
      ]
    },
    {
      name: "전해윤",
      role: "Back-end Developer",
      links: [
        { label: "Github", url: "https://github.com/godbs129", icon: GithubLogo },
        { label: "Blog", url: "https://velog.io/@godbs129", icon: Blog },
        { label: "RocketPunch", url: "https://www.rocketpunch.com/@junhaeyoon", icon: IoIosRocket }
      ]
    },
    {
      name: "천승희",
      role: "Front-end Developer",
      links: [
        { label: "Github", url: "https://github.com/cjstmdgml", icon: GithubLogo },
        { label: "Blog", url: "", icon: Blog }
      ]
    },
    {
      name: "홍준혁",
      role: "Front-end Developer",
      links: [
        { label: "Github", url: "https://github.com/Hong-JunHyeok", icon: GithubLogo },
        { label: "Blog", url: "https://hong-jh.tistory.com/", icon: Blog }
      ]
    },
    {
      name: "황현빈",
      role: "Android Developer",
      links: [
        { label: "Github", url: "https://github.com/HYE0N1127", icon: GithubLogo },
        { label: "Blog", url: "hyeon1127.tistory.com", icon: Blog },
        { label: "Velog", url: "https://velog.io/@hhb041127", icon: Blog },
        { label: "RocketPunch", url: "https://www.rocketpunch.com/@hyeonbin", icon: IoIosRocket }
      ]
    }
  ],
  "4": [
    {
      name: "강민석",
      role: "iOS Developer",
      links: [
        { label: "Github", url: "https://github.com/devMinseok", icon: GithubLogo },
        { label: "Blog", url: "https://axe-num1.tistory.com/", icon: Blog }
      ]
    },
    {
      name: "곽준환",
      role: "Designer",
      links: [
        { label: "Github", url: "https://github.com/Gwak-Jun-Hwan", icon: GithubLogo },
        { label: "Blog", url: "", icon: Blog },
        { label: "RocketPunch", url: "https://www.rocketpunch.com/@kwakjunhwan", icon: IoIosRocket }
      ]
    },
    {
      name: "권순관",
      role: "Front-end Developer",
      links: [
        { label: "Github", url: "https://github.com/SoonGwan", icon: GithubLogo },
        { label: "RocketPunch", url: "https://www.rocketpunch.com/@77530e03b7dc4d75", icon: IoIosRocket },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/%EC%88%9C%EA%B4%80-%EA%B6%8C-6a945819a/", icon: Linkedin }
      ]
    },
    {
      name: "권용빈",
      role: "Front-end Developer",
      links: [
        { label: "Github", url: "https://github.com/yiyb0603", icon: GithubLogo },
        { label: "Blog", url: "https://blog.naver.com/yiyb0603", icon: Blog },
        { label: "Velog", url: "https://velog.io/@yiyb0603", icon: Blog },
        { label: "RocketPunch", url: "https://www.rocketpunch.com/@513886f28e2b4088", icon: IoIosRocket }
      ]
    },
    {
      name: "김경훈",
      role: "Window Developer",
      links: [
        { label: "Github", url: "https://github.com/KyungHoon0126", icon: GithubLogo },
        { label: "Blog", url: "https://blog.naver.com/kkh03kkh", icon: Blog }
      ]
    },
    {
      name: "김성헌",
      role: "Window Developer",
      links: [
        { label: "Github", url: "https://github.com/Seongheon03", icon: GithubLogo },
        { label: "Blog", url: "https://blog.naver.com/kshksh825", icon: Blog }
      ]
    },
    {
      name: "김주엽",
      role: "Android Developer",
      links: [
        { label: "Github", url: "https://github.com/Kim-Ju-Yeop", icon: GithubLogo },
        { label: "Blog", url: "https://juyeop.tistory.com", icon: Blog }
      ]
    },
    {
      name: "김혜선",
      role: "Front-end Developer",
      links: [
        { label: "Github", url: "https://github.com/hyess210", icon: GithubLogo },
        { label: "Blog", url: "https://sunnytdy.tistory.com/", icon: Blog }
      ]
    },
    {
      name: "박 진",
      role: "Android Developer",
      links: [
        { label: "Github", url: "https://github.com/flaw5886", icon: GithubLogo },
        { label: "Blog", url: "https://blog.naver.com/parkjin0318", icon: Blog }
      ]
    },
    {
      name: "여동민",
      role: "Window Developer",
      links: [
        { label: "Github", url: "https://github.com/hvboq", icon: GithubLogo },
        { label: "Blog", url: "https://op-op.tistory.com/", icon: Blog },
        { label: "RocketPunch", url: "https://www.rocketpunch.com/@113aa2cea1ca4a85", icon: IoIosRocket }
      ]
    },
    {
      name: "오하형",
      role: "Front-end Developer",
      links: [
        { label: "Github", url: "https://github.com/maryoh2003", icon: GithubLogo },
        { label: "Blog", url: "https://blog.naver.com/maryoh2002", icon: Blog }
      ]
    },
    {
      name: "이영은",
      leader: true,
      role: "Android Developer",
      links: [
        { label: "Github", url: "https://github.com/Monsteel", icon: GithubLogo },
        { label: "Blog", url: "http://monsteel.github.io", icon: Blog }
      ]
    },
    {
      name: "최진우",
      leader: true,
      role: "Back-end Developer",
      links: [
        { label: "Github", url: "https://github.com/Choi-jinwoo", icon: GithubLogo },
        { label: "Blog", url: "http://wlswoo.tistory.com", icon: Blog },
        { label: "RocketPunch", url: "https://www.rocketpunch.com/@chlwlsdn0828", icon: IoIosRocket },
        { label: "Notion", url: "https://www.notion.so/wlswoo/Choi-Jinwoo-1d12bbc71f7f45e590ed199629372769", icon: UserCircle }
      ]
    }
  ],
  "3": [
    {
      name: "고현석",
      role: "Android Developer",
      links: [
        { label: "Github", url: "", icon: GithubLogo },
        { label: "Blog", url: "", icon: Blog }
      ]
    },
    {
      name: "권선국",
      role: "Front-end Developer",
      links: [
        { label: "Github", url: "https://github.com/gguggu", icon: GithubLogo },
        { label: "Blog", url: "", icon: Blog },
        { label: "RocketPunch", url: "https://www.rocketpunch.com/@abebc24d7651439a", icon: IoIosRocket }
      ]
    },
    {
      name: "김원빈",
      role: "Front-end Developer",
      links: [
        { label: "Github", url: "", icon: GithubLogo },
        { label: "Blog", url: "", icon: Blog }
      ]
    },
    {
      name: "김태오",
      role: "Window Developer",
      links: [
        { label: "Github", url: "https://github.com/Sunday5214", icon: GithubLogo },
        { label: "Blog", url: "https://sunday5214.tistory.com/", icon: Blog }
      ]
    },
    {
      name: "김현재",
      role: "Android Developer",
      links: [
        { label: "Github", url: "", icon: GithubLogo },
        { label: "Blog", url: "", icon: Blog }
      ]
    },
    {
      name: "나동혁",
      role: "Android Developer",
      links: [
        { label: "Github", url: "", icon: GithubLogo },
        { label: "Blog", url: "", icon: Blog }
      ]
    },
    {
      name: "노민희",
      role: "iOS Developer",
      links: [
        { label: "Github", url: "", icon: GithubLogo },
        { label: "Blog", url: "", icon: Blog }
      ]
    },
    {
      name: "류재정",
      role: "Front-end Developer",
      links: [
        { label: "Github", url: "", icon: GithubLogo },
        { label: "Blog", url: "", icon: Blog }
      ]
    },
    {
      name: "박건우",
      role: "Android Developer",
      links: [
        { label: "Github", url: "", icon: GithubLogo },
        { label: "Blog", url: "", icon: Blog }
      ]
    },
    {
      name: "오해성",
      role: "Back-end Developer",
      links: [
        { label: "Github", url: "", icon: GithubLogo },
        { label: "Blog", url: "", icon: Blog }
      ]
    },
    {
      name: "이유승",
      role: "Android Developer",
      links: [
        { label: "Github", url: "https://github.com/leeyouseung", icon: GithubLogo },
        { label: "Blog", url: "", icon: Blog }
      ]
    },
    {
      name: "이진영",
      leader: true,
      role: "Back-end Developer",
      links: [
        { label: "Github", url: "https://github.com/wlsdud2194", icon: GithubLogo },
        { label: "Blog", url: "https://velog.io/@wlsdud2194", icon: Blog }
      ]
    },
    {
      name: "전광용",
      role: "Back-end Developer",
      links: [
        { label: "Github", url: "https://github.com/DevJeon1358", icon: GithubLogo },
        { label: "Blog", url: "https://velog.io/@devjeon1358", icon: Blog },
        { label: "Portfolio", url: "http://devjeon.xyz", icon: UserCircle }
      ]
    },
    {
      name: "최석준",
      role: "Front-end Developer",
      links: [
        { label: "Github", url: "https://github.com/boggil", icon: GithubLogo },
        { label: "Blog", url: "https://blog.naver.com/ghdudwlwns", icon: Blog },
        { label: "RocketPunch", url: "https://www.rocketpunch.com/@tjrwns1217", icon: IoIosRocket }
      ]
    },
    {
      name: "추명호",
      leader: true,
      role: "Front-end Developer",
      links: [
        { label: "Github", url: "https://github.com/ttingho", icon: GithubLogo },
        { label: "Blog", url: "https://ttingho.tistory.com", icon: Blog },
        { label: "RocketPunch", url: "https://www.rocketpunch.com/@ttingho", icon: IoIosRocket }
      ]
    },
    {
      name: "황보민",
      role: "Window Developer",
      links: [
        { label: "Github", url: "", icon: GithubLogo },
        { label: "Blog", url: "", icon: Blog }
      ]
    },
    {
      name: "황유신",
      role: "Designer",
      links: [
        { label: "Github", url: "", icon: GithubLogo },
        { label: "Blog", url: "", icon: Blog }
      ]
    }
  ],
  "2": [
    {
      name: "강서연",
      role: "Back-end Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "김민찬",
      role: "Window Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "김성훈",
      role: "Window Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "김시아",
      role: "Back-end Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "김준영",
      role: "Window Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "김지오",
      role: "Android Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "나해인",
      role: "Designer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "남형진",
      leader: true,
      role: "Window Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "민경빈",
      role: "Front-end Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "박태형",
      role: "Back-end Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "서진혁",
      role: "Front-end Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "우현진",
      role: "iOS Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "이동엽",
      role: "Window Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "이효성",
      role: "Window Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    }
  ],
  "1": [
    {
      name: "김대용",
      leader: true,
      role: "Window Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "서동혁",
      role: "Android Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "서정민",
      role: "Window Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "오동헌",
      role: "Designer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "유민서",
      role: "Window Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "이소진",
      role: "Window Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "이지헌",
      role: "Android Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "정동형",
      role: "Android Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "정성화",
      leader: true,
      role: "Android Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "정한나",
      role: "Back-end Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    },
    {
      name: "최영훈",
      role: "Back-end Developer",
      links: [
        { label: "Github", url: "", icon: null },
        { label: "Blog", url: "", icon: null }
      ]
    }
  ]
};


