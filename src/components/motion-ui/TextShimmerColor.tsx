import { TextShimmer } from '@/components/core/text-shimmer';

interface Props {
  children: ReactNode;
}

export default function TextShimmerColor({ children }: Props) {
  return (
    <TextShimmer
      duration={1.2}
      className='[--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]'
    >
      {children}
    </TextShimmer>
  );
}
