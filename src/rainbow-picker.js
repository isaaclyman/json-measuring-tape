const colors = ['148, 0, 211', '255, 0, 0', '75, 0, 130', '255, 127, 0', '0, 0, 255', '255, 255, 0', '0, 255, 0'];

export default function getColor (depth) {
  const rgb = colors[depth % colors.length]
  return `rgba(${rgb}, 0.1)`
}
