def _compute_non_prerelease_version(prerelease_version: str) -> str:
    prerelease_keywords = ["a", "b", "rc", "dev", "post"]
    for keyword in prerelease_keywords:
        if keyword in prerelease_version:
            return prerelease_version.split(keyword)[0][:-1]
    return prerelease_version


def _get_version_info():
    """Retrieves the version of the package from a possible list of package names.

    This accounts for after package names are updated for -nightly builds.

    Returns:
        str: The version of the package

    Raises:
        ValueError: If the package is not found from the list of package names.
    """
    from importlib import metadata

    package_options = [
        ("langflow", "Langflow"),
        ("langflow-base", "Langflow Base"),
        ("langflow-nightly", "Langflow Nightly"),
        ("langflow-base-nightly", "Langflow Base Nightly"),
    ]
    __version__ = None
    for pkg_name, display_name in package_options:
        try:
            __version__ = metadata.version(pkg_name)
            prerelease_version = __version__
            version = _compute_non_prerelease_version(prerelease_version)
        except (ImportError, metadata.PackageNotFoundError):
            pass
        else:
            return {
                "version": prerelease_version,
                "main_version": version,
                "package": display_name,
            }

    if __version__ is None:
        msg = f"Package not found from options {package_options}"
        raise ValueError(msg)
    return None


VERSION_INFO = _get_version_info()


def is_pre_release(v: str) -> bool:
    """Whether the version is a pre-release version.

    Returns a boolean indicating whether the version is a pre-release version,
    as per the definition of a pre-release segment from PEP 440.
    """
    return any(label in v for label in ["a", "b", "rc"])


def is_nightly(v: str) -> bool:
    """Whether the version is a dev (nightly) version.

    Returns a boolean indicating whether the version is a dev (nightly) version,
    as per the definition of a dev segment from PEP 440.
    """
    return "dev" in v


def fetch_latest_version() -> str | None:
    return "1.1.0"


def get_version_info():
    return VERSION_INFO
