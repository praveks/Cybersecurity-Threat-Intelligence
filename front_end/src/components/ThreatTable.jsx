import { FaShieldAlt } from 'react-icons/fa';

const ThreatTable = ({ threats }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr className="text-center">
            <th>IP Address</th>
            <th>Domain</th>
            <th>URL</th>
            <th>File Hash</th>
            <th>Threat Level</th>
            <th>Category</th>
            <th>Malicious</th>
          </tr>
        </thead>
        <tbody>
          {threats.map(threat => (
            <tr key={threat._id} className={threat.isMalicious ? 'table-danger' : ''}>
              <td>{threat.ipAddress}</td>
              <td>{threat.domain}</td>
              <td>{threat.url}</td>
              <td>{threat.fileHash}</td>
              <td>{threat.threatLevel}</td>
              <td>{threat.category}</td>
              <td>
                {threat.isMalicious ? (
                  <span className="text-danger">
                    <FaShieldAlt /> Yes
                  </span>
                ) : (
                  'No'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ThreatTable