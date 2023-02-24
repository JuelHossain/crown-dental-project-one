export default function Arch({ svgClass, pathClass }) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 755.3 307.7"
      //   style="enable-background:new 0 0 755.3 307.7;"
      xmlSpace="preserve"
      className={svgClass || "w-[60vw] z-10"}
    >
      <path
        className={pathClass || "fill-white/75 dark:fill-stone-800/75"}
        d="M715.8,250.1c-218.8,76.8-457.4,76.8-676.3,0C10,239.7-6.4,213.2,2.3,192.7C25.5,136.8,48.7,80.8,71.8,24.9
		c8.7-20.5,33-29.9,54.5-22.3c162.6,57.1,339.9,57.1,502.6,0c21.5-7.5,45.8,1.8,54.5,22.3c23.2,55.9,46.3,111.8,69.5,167.8
		C761.6,213.2,745.3,239.7,715.8,250.1z"
      />
    </svg>
  );
}
