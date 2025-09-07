const handleDiscordLogin = async () => {
  const loadingToast = showLoading("Connecting to Discord...").toString();
  
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: window.location.origin + '/auth/callback',
        scopes: 'identify email'
      }
    });

    if (error) {
      dismissToast(loadingToast);
      showError(`Login failed: ${error.message}`);
      return;
    }
  } catch (err) {
    dismissToast(loadingToast);
    showError('Failed to initiate login');
  }
};