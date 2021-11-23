import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function PackageIcon({ ...wrapperProps }: IconProps): React.ReactElement {
  return (
    <IconWrapper viewBox={"0 0 20 20"} width={20} height={20} {...wrapperProps}>
      <path d="M10.4462 0.428689L10.4462 0.428688L10.4456 0.428385L10.442 0.426622L10.4419 0.426531C10.0285 0.220744 9.53775 0.225343 9.12828 0.438842L9.12828 0.438839L9.12748 0.439267L5.49569 2.36675C5.46281 2.38103 5.43144 2.39783 5.40162 2.41668L1.04906 4.72673C1.04895 4.72678 1.04885 4.72684 1.04875 4.72689C0.57064 4.97737 0.273438 5.46835 0.273438 6.00829V13.9913C0.273438 14.5313 0.570645 15.0222 1.04875 15.2727C1.04885 15.2728 1.04895 15.2728 1.04906 15.2729L9.12387 19.5585L9.12433 19.5587L9.12797 19.5606L9.12832 19.5608C9.33726 19.6698 9.56733 19.7243 9.79725 19.7243C10.0181 19.7243 10.2392 19.674 10.4419 19.5731L10.4426 19.5727L18.9239 15.2753C18.9241 15.2753 18.9242 15.2752 18.9244 15.2751C19.4171 15.0285 19.7234 14.5327 19.7234 13.9816V6.01808C19.7234 5.46687 19.417 4.97092 18.9242 4.7244C18.9241 4.72436 18.924 4.72432 18.9239 4.72428L10.4462 0.428689ZM9.10184 17.9906L1.69116 14.0574L1.69073 14.0572L1.68709 14.0553L1.68678 14.0551C1.66266 14.0425 1.64803 14.0183 1.64803 13.9913V6.7219L9.10184 10.6087V17.9906ZM18.3488 13.9815V13.9816C18.3488 14.0094 18.3338 14.0336 18.3089 14.046L18.3081 14.0464L10.4765 18.0146V10.6175L13.9159 8.90517V10.6291C13.9159 11.0087 14.2237 11.3164 14.6033 11.3164C14.9828 11.3164 15.2906 11.0087 15.2906 10.6291V8.2208L18.3488 6.69826V13.9815ZM9.7644 1.65737C9.7646 1.65728 9.76479 1.65718 9.76498 1.65708C9.78462 1.64723 9.8083 1.64702 9.82817 1.65656C9.82835 1.65664 9.82853 1.65673 9.82871 1.65682L17.5413 5.56474L14.7329 6.9629L7.23943 2.99748L9.7644 1.65737ZM5.77212 3.77631L13.2187 7.71681L9.79639 9.4206L2.40212 5.56486L5.77212 3.77631Z" />
    </IconWrapper>
  );
}