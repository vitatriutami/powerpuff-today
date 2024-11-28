import TextShimmer from '@/components/core/text-shimmer';

interface Props {
  children: string; // Restrict children to a string
}

export default function TextShimmerColor({ children }: Props) {
  return (
    <TextShimmer
      duration={1.2}
      className='[--base-color:theme(colors.purple.300)] [--base-gradient-color:theme(colors.purple.100)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]'
    >
      {children}
    </TextShimmer>
  );
}
