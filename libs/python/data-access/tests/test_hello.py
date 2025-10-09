"""Hello unit test module."""

from data_access.hello import hello


def test_hello():
    """Test the hello function."""
    assert hello() == "Hello data-access"
