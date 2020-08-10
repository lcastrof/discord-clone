export const switchChannel = (name, description) => ({
  type: 'SWITCH_CHANNEL',
  name,
  description,
});

export const switchServer = (name) => ({
  type: 'SWITCH_SERVER',
  name,
});
