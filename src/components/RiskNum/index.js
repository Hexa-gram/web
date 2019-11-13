import { checkLevel } from '@/utils/utils'

function Risk(props) {
  const { risk } = props;
  return (
    <span style={{ color: checkLevel(risk) }}>{risk}</span>
  )
}

export default Risk; 
