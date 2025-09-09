import { useEffect, useState } from 'react';
import api from '../../services/api';
import LoadingSpinner from '../LoadingSpinner.jsx';

const AdminAttendance = () => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const load = async () => {
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      const res = await api.get('/admin/attendance', { params: { date } });
      setRows(res.data.employees || []);
    } catch (e) {
      setError('Failed to load attendance');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const update = async (employeeId, present) => {
    setError('');
    setSuccess('');
    try {
      const res = await api.patch(`/admin/attendance/${employeeId}`, { date, present });
      setRows(rows.map(r => r.id === employeeId ? { ...r, present: res.data.present } : r));
      setSuccess('Attendance updated');
    } catch (e) {
      setError('Failed to update attendance');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Daily Attendance</h2>
        <div className="flex items-center space-x-3">
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <button onClick={load} className="bg-gray-200 text-gray-800 px-3 py-2 rounded-md">Reload</button>
        </div>
      </div>

      {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded">{error}</div>}
      {success && <div className="bg-green-100 text-green-700 px-4 py-2 rounded">{success}</div>}

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <LoadingSpinner size="lg" text="Loading attendance..." />
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50 text-left text-sm text-gray-600">
                <th className="px-4 py-3">Employee</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Department</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-t">
                  <td className="px-4 py-3 font-medium">{r.name}</td>
                  <td className="px-4 py-3">{r.email}</td>
                  <td className="px-4 py-3">{r.department?.name || '—'}</td>
                  <td className="px-4 py-3">
                    {r.present === null ? (
                      <span className="text-gray-500">Not marked</span>
                    ) : r.present ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Present</span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Absent</span>
                    )}
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    <button onClick={() => update(r.id, true)} className="bg-green-600 text-white px-3 py-1 rounded">Mark Present</button>
                    <button onClick={() => update(r.id, false)} className="bg-red-600 text-white px-3 py-1 rounded">Mark Absent</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminAttendance;
