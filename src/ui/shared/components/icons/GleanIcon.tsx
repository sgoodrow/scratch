import { SvgIcon } from "@mui/material";
import { CustomSvgIconProps } from "@/ui/shared/types/icons";

export const GleanIcon = (props: CustomSvgIconProps) => {
  return (
    <SvgIcon {...props} inheritViewBox>
      {/* From https://app.glean.com/images/glean-logo2.svg */}
      <svg width="800px" height="800px" viewBox="0 0 32 32">
        <path
          d="M24.3006 2.95427L20.7656 0.199951L17.9028 3.99527C13.5653 1.93495 8.23019 3.08439 5.19394 7.00983C1.65888 11.5642 2.483 18.1138 7.03738 21.6489C8.77238 22.9935 10.7893 23.7092 12.8279 23.8177C16.1461 24.0128 19.5077 22.6248 21.6765 19.8055C24.7344 15.88 24.5175 10.4148 21.4596 6.72789L24.3006 2.95427ZM18.1197 17.0512C16.1028 19.632 12.3725 20.1091 9.77001 18.0922C7.18919 16.0752 6.71207 12.3233 8.72901 9.74246C9.70494 8.48458 11.1146 7.68214 12.6761 7.48696C13.0448 7.44358 13.4135 7.4219 13.7822 7.44358C14.975 7.50865 16.1244 7.94239 17.0787 8.67977C19.6595 10.7184 20.1366 14.4703 18.1197 17.0512Z"
          fill="#343ced"
        />
        <path
          d="M24.5176 21.6922C23.932 22.4513 23.2814 23.1236 22.5657 23.7525C21.8717 24.3381 21.1127 24.8803 20.3102 25.3357C19.5295 25.7695 18.6837 26.1382 17.8378 26.4201C16.992 26.702 16.1028 26.8972 15.2137 27.0057C14.3245 27.1141 13.4353 27.1575 12.5244 27.0924C11.6135 27.0273 10.7243 26.8755 9.85684 26.6587L9.66165 27.3743L8.77246 30.9962C9.90021 31.2998 11.0497 31.4733 12.2208 31.56C12.2642 31.56 12.3292 31.56 12.3726 31.56C13.5003 31.6251 14.6498 31.5817 15.7558 31.4516C16.927 31.2998 18.0981 31.0395 19.2258 30.6708C20.3536 30.3022 21.4597 29.825 22.5007 29.2395C23.5634 28.6539 24.561 27.9382 25.4935 27.1575C26.4478 26.355 27.3153 25.4442 28.0744 24.4465C28.1828 24.3164 28.2695 24.1646 28.378 24.0128L24.7779 21.3452C24.6694 21.4537 24.6044 21.5838 24.5176 21.6922Z"
          fill="#343ced"
        />
      </svg>
    </SvgIcon>
  );
};