export function AboutVenn() {
  return (
    <svg
      role="img"
      aria-label="Venn diagram showing the overlap of Research, Design, and Engineering"
      viewBox="0 0 280 220"
      className="w-full max-w-[18rem] h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Three circles with very light primary tint */}
      <circle
        cx="140"
        cy="72"
        r="62"
        fill="hsl(var(--primary) / 0.04)"
        stroke="hsl(var(--border))"
        strokeWidth="1"
      />
      <circle
        cx="90"
        cy="145"
        r="62"
        fill="hsl(var(--primary) / 0.04)"
        stroke="hsl(var(--border))"
        strokeWidth="1"
      />
      <circle
        cx="190"
        cy="145"
        r="62"
        fill="hsl(var(--primary) / 0.04)"
        stroke="hsl(var(--border))"
        strokeWidth="1"
      />

      {/* Center intersection accent */}
      <circle
        cx="140"
        cy="120"
        r="10"
        fill="hsl(var(--primary))"
        opacity="0.9"
      />

      {/* Labels */}
      <text
        x="140"
        y="45"
        textAnchor="middle"
        fill="hsl(var(--muted-foreground))"
        fontSize="12"
        fontWeight="500"
        fontFamily="'Manrope Variable', system-ui, sans-serif"
      >
        Research
      </text>
      <text
        x="55"
        y="175"
        textAnchor="middle"
        fill="hsl(var(--muted-foreground))"
        fontSize="12"
        fontWeight="500"
        fontFamily="'Manrope Variable', system-ui, sans-serif"
      >
        Design
      </text>
      <text
        x="225"
        y="175"
        textAnchor="middle"
        fill="hsl(var(--muted-foreground))"
        fontSize="12"
        fontWeight="500"
        fontFamily="'Manrope Variable', system-ui, sans-serif"
      >
        Engineering
      </text>

      {/* Center label */}
      <text
        x="140"
        y="150"
        textAnchor="middle"
        fill="hsl(var(--foreground))"
        fontSize="11"
        fontWeight="600"
        fontFamily="'Manrope Variable', system-ui, sans-serif"
      >
        My work
      </text>
    </svg>
  );
}
