"""Hello unit test module."""

from data_quality.hello import hello


def test_hello():
    """Test the hello function."""
    assert hello() == "Hello data-quality"
