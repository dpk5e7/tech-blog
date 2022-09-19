// Helper functions for Handlebars
module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return new Date(date).toLocaleDateString();
  },
  format_datetime: (date) => {
    return new Date(date).toLocaleString();
  },
  trim_string: (value) => {
    return value.trim();
  },
};
