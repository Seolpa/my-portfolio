import Image from "next/image";

const highlights = [
  { number: "10+", label: "재즈 페스티벌", desc: "자라섬, 울산, 대구, 부산, 태화강, 기장 등" },
  { number: "20+", label: "앨범 세션", desc: "정홍일, Diamond Bridge, 달빔, 홍영호트리오 외" },
  { number: "4", label: "YouTube 채널", desc: "몽키비지엠, 몽렉싱피아노, 몽싸노바, 에브리데이피아노" },
  { number: "13+", label: "Years", desc: "2013년부터 프로 활동" },
];

const youtubeChannels = [
  {
    name: "MONKEY BGM",
    desc: "재즈 BGM 전문 채널",
    url: "https://www.youtube.com/@MonkeySoundDesign",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "MONGLAXING",
    desc: "몽렉싱피아노 - 릴렉싱 피아노",
    url: "https://www.youtube.com/@MONGLAXING",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "MONGSSANOVA",
    desc: "몽싸노바 - 보사노바 & 재즈",
    url: "https://www.youtube.com/@MONGSSANOVA",
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Everyday Piano",
    desc: "에브리데이피아노 - 일상 피아노",
    url: "https://www.youtube.com/@EverydayPiano2025",
    color: "from-purple-500 to-pink-500",
  },
];

const albums = [
  "정홍일 정규 1집 '숨쉴수만있다면'",
  "Diamond Bridge 정규1집 'It's alright'",
  "홍영호트리오 정규앨범 'I need caffein'",
  "Minjusin Trio 2집",
  "달빔 싱글 '휘파람새' / '고양이의 노래'",
  "Diamond Bridge 싱글 '다 담을 수 있을까'",
  "HearIM(헤아림) 1st EP 'Mono Heart'",
  "모노맨(MONOMAN) '두사람의 거리'",
  "가야금 박현정 1집 '꽃바람-랄랄라'",
  "앵구송 EP 'Seuno(꿈)'",
];

const majorPerformances = [
  { year: "2023", events: ["KBS 최백호, 정훈희 베이스 세션", "부산세계맥주축제 초청공연", "홍영호트리오 부산소공연장 투어"] },
  { year: "2022", events: ["태화강 재즈페스티벌 - 민주신트리오", "동래문화회관 Culture Palette"] },
  { year: "2019", events: ["일본 이바라키음악제 초청 연주", "태화강 재즈 페스티벌"] },
  { year: "2018", events: ["Shining Star Concert - 거미, 안치환 세션", "대구국제 재즈 페스티벌", "tvN '김비서가 왜그럴까' BGM 녹음"] },
  { year: "2016", events: ["EMERGENZA FESTIVAL 한국 결승 진출", "울산재즈페스티벌"] },
  { year: "2015", events: ["자라섬 재즈 페스티벌", "ABC TV Columbus Day Parade 녹음 세션", "기장국제재즈페스티벌"] },
];

export default function Home() {
  return (
    <div className="bg-[#030712] text-white">
      {/* ─── Navigation ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur bg-[#030712]/70 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight gradient-text">DW</span>
          <div className="hidden sm:flex gap-8 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#youtube" className="hover:text-white transition-colors">YouTube</a>
            <a href="#discography" className="hover:text-white transition-colors">Discography</a>
            <a href="#career" className="hover:text-white transition-colors">Career</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* ─── Hero Section ─── */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <Image
          src="/bass-electric.jpg"
          alt="황대웅 - Electric Bass"
          fill
          className="object-cover object-top"
          priority
          quality={90}
        />
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 w-full">
          <p className="text-sky-400 text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Bassist & Content Director
          </p>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-4">
            황대웅
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-light">
            Hwang Dae Woong
          </p>
          <p className="text-gray-500 mt-4 max-w-lg text-base leading-relaxed">
            (주)몽비 이사 &middot; 콘텐츠 운영팀
            <br />
            온더베이스뮤직스튜디오 대표 &middot; 유튜브 자동화 개발자
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="#contact"
              className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-black font-semibold rounded-full text-sm transition-colors"
            >
              Contact
            </a>
            <a
              href="#about"
              className="px-6 py-3 border border-white/20 hover:border-white/40 rounded-full text-sm transition-colors"
            >
              More
            </a>
          </div>
        </div>
        {/* scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─── Highlights ─── */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <div key={i} className="text-center p-6">
              <div className="text-4xl font-bold gradient-text mb-2">{h.number}</div>
              <div className="text-white font-medium text-sm mb-1">{h.label}</div>
              <div className="text-gray-500 text-xs">{h.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="py-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden glow-blue">
              <Image
                src="/bass-contrabass.jpg"
                alt="황대웅 - Contrabass"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sky-400 text-sm font-medium tracking-[0.2em] uppercase mb-3">About</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                음악과 기술의
                <br />
                <span className="gradient-text">크로스오버</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  동아대학교 실용음악과에서 베이스를 시작으로, 한양대학교 대학원 실용음악,
                  부산대학교 대학원 국악작곡까지 &mdash; 장르의 경계 없이 음악을 탐구하고 있습니다.
                </p>
                <p>
                  자라섬, 울산, 대구, 부산, 태화강, 기장 등 전국 주요 재즈 페스티벌에서 무대에 올랐고,
                  tvN 드라마 &lsquo;김비서가 왜그럴까&rsquo; BGM 녹음, KBS 최백호&middot;정훈희 세션,
                  거미&middot;안치환 콘서트 세션 등 다양한 프로젝트에 참여했습니다.
                </p>
                <p>
                  10년째 운영 중인 온더베이스뮤직스튜디오에서 개인 레슨을 진행하며 후배 양성에도 힘쓰고 있고,
                  현재 (주)몽비 이사로서 4개의 유튜브 채널 콘텐츠를 기획&middot;운영하며
                  유튜브 자동화 시스템을 직접 개발하고 있습니다.
                </p>
              </div>
              {/* Education */}
              <div className="mt-8 space-y-2">
                <p className="text-white text-sm font-semibold mb-3">Education</p>
                {[
                  "동아대학교 실용음악 베이스 전공",
                  "한양대학교 일반대학원 실용음악과",
                  "부산대학교 일반대학원 국악작곡",
                ].map((edu, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    {edu}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── YouTube Channels ─── */}
      <section id="youtube" className="py-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sky-400 text-sm font-medium tracking-[0.2em] uppercase mb-3">YouTube</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            운영 중인 <span className="gradient-text">채널</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {youtubeChannels.map((ch, i) => (
              <a
                key={i}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover group block rounded-2xl bg-[#0f1729] border border-white/5 p-6 hover:border-white/10"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ch.color} flex items-center justify-center mb-4 text-white font-bold text-lg`}>
                  {ch.name[0]}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-sky-400 transition-colors">
                  {ch.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{ch.desc}</p>
                <div className="mt-4 text-xs text-gray-600 group-hover:text-gray-400 transition-colors flex items-center gap-1">
                  YouTube에서 보기
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </a>
            ))}
          </div>
          {/* Personal channel */}
          <div className="mt-6">
            <a
              href="https://www.youtube.com/@Whatsyourfavorite2025"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover inline-flex items-center gap-3 rounded-full bg-[#0f1729] border border-white/5 hover:border-white/10 px-6 py-3 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-red-500" />
              개인 채널: What&apos;s Your Favorite?
            </a>
          </div>
        </div>
      </section>

      {/* ─── Discography ─── */}
      <section id="discography" className="py-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sky-400 text-sm font-medium tracking-[0.2em] uppercase mb-3">Discography</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            앨범 <span className="gradient-text">참여 작품</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {albums.map((album, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl bg-[#0f1729] border border-white/5 px-5 py-4"
              >
                <span className="text-sky-500/50 font-mono text-sm w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-gray-300 text-sm">{album}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-6">외 다수 앨범 세션 참여</p>
        </div>
      </section>

      {/* ─── Career Timeline ─── */}
      <section id="career" className="py-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sky-400 text-sm font-medium tracking-[0.2em] uppercase mb-3">Career</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            주요 <span className="gradient-text">연주 경력</span>
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[22px] top-0 bottom-0 w-px timeline-line opacity-20 hidden md:block" />
            <div className="space-y-10">
              {majorPerformances.map((period, i) => (
                <div key={i} className="flex gap-6">
                  {/* Year badge */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-11 h-11 rounded-full bg-[#0f1729] border border-sky-500/30 flex items-center justify-center text-sky-400 text-sm font-bold shrink-0">
                      {period.year.slice(2)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sky-400 font-semibold text-sm mb-3 md:hidden">{period.year}</div>
                    <div className="space-y-2">
                      {period.events.map((event, j) => (
                        <div
                          key={j}
                          className="rounded-lg bg-[#0f1729] border border-white/5 px-5 py-3 text-sm text-gray-400"
                        >
                          {event}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Bands */}
          <div className="mt-16">
            <p className="text-white text-sm font-semibold mb-4">활동 밴드 & 그룹</p>
            <div className="flex flex-wrap gap-3">
              {[
                "퓨전국악밴드 '달빔' (리더)",
                "Diamond Bridge",
                "민주신트리오",
                "Salsa Timba Band 'Primera'",
                "hee's band",
                "홍영호트리오",
              ].map((band, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-[#0f1729] border border-white/5 text-sm text-gray-400"
                >
                  {band}
                </span>
              ))}
            </div>
          </div>
          {/* Teaching */}
          <div className="mt-10">
            <p className="text-white text-sm font-semibold mb-4">교육 활동</p>
            <div className="flex flex-wrap gap-3">
              {[
                "온더베이스뮤직스튜디오 대표 (10년 운영)",
                "부산여자대학교 콘서바토리 출강",
                "서부산공업고등학교 밴드부 강사",
                "반디기독학교 밴드부 강사",
              ].map((t, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-[#0f1729] border border-white/5 text-sm text-gray-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sky-400 text-sm font-medium tracking-[0.2em] uppercase mb-3">Contact</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                함께 <span className="gradient-text">작업하기</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                세션, 공연, 앨범 작업, 콘텐츠 협업 등<br />
                어떤 프로젝트든 편하게 연락주세요.
              </p>
              {/* Profile image */}
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="황대웅 프로필"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              {/* Contact items */}
              <div className="space-y-4">
                <a
                  href="mailto:Wonderfulmusicbgm@gmail.com"
                  className="card-hover flex items-center gap-4 rounded-xl bg-[#0f1729] border border-white/5 hover:border-white/10 px-6 py-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 text-lg">
                    @
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Email</div>
                    <div className="text-sm text-gray-300">Wonderfulmusicbgm@gmail.com</div>
                  </div>
                </a>
                <a
                  href="tel:01083131509"
                  className="card-hover flex items-center gap-4 rounded-xl bg-[#0f1729] border border-white/5 hover:border-white/10 px-6 py-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Phone</div>
                    <div className="text-sm text-gray-300">010-8313-1509</div>
                  </div>
                </a>
              </div>
              {/* Social links */}
              <div className="space-y-3">
                <p className="text-xs text-gray-600 uppercase tracking-widest">Social</p>
                {[
                  { name: "Instagram (Personal)", url: "https://www.instagram.com/im.woong2_/", color: "text-pink-400" },
                  { name: "Instagram (On The Base)", url: "https://www.instagram.com/onthebase_bass/", color: "text-purple-400" },
                  { name: "YouTube (MONKEY BGM)", url: "https://www.youtube.com/@MonkeySoundDesign", color: "text-red-400" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors group"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${social.color.replace("text-", "bg-")}`} />
                    <span>{social.name}</span>
                    <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-gray-600 text-sm">
            &copy; 2026 황대웅. All rights reserved.
          </span>
          <span className="text-gray-700 text-xs">
            (주)몽비 &middot; 콘텐츠 운영팀
          </span>
        </div>
      </footer>
    </div>
  );
}
