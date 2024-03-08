import PropTypes from "prop-types"

const HiveStat = ({list}) => {

  const nameValueList = ['HP', 'HIVE', 'HBD']

  return (
    <span style={{ float: 'right', fontSize: '140%', color: '#888', fontWeight: '200', textAlign: 'right', marginTop: '-10px' }}>
      <pre>
        <table className="">
          <tbody className='p-60 m-60'>
            {list.map((item, index) => {
              const [integerPart, fractionalPart] = item.toFixed(3).split('.')
              return (
                <tr key={index}>
                  <td className=''>{parseInt(integerPart).toLocaleString()}<span className="text-muted">.{fractionalPart}</span></td>
                  <td>&nbsp;</td>
                  <td className='grid justify-start'>{nameValueList[index]}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </pre>
    </span>
  )
}

HiveStat.propTypes = {
  list: PropTypes.array.isRequired,
}

export default HiveStat
