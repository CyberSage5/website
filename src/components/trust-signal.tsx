interface TrustSignalProps {
  icon: string
  value: string
  label: string
}

export default function TrustSignal({ icon, value, label }: TrustSignalProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 sm:p-6 shadow-sm transition-opacity duration-300 hover:opacity-90">
      <div className="mb-1 sm:mb-2 text-3xl sm:text-4xl">{icon}</div>
      <div className="mb-1 text-2xl sm:text-3xl font-bold text-primary">{value}</div>
      <div className="text-xs sm:text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

